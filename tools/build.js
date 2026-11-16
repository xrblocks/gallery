import {globSync, readdirSync, rmSync} from 'node:fs';
import path from 'node:path';
import {rolldown} from 'rolldown';

let builtProjects = 0;
const directories = [
  'template',
  ...readdirSync('demos', {withFileTypes: true})
    .filter((project) => project.isDirectory() && !project.name.startsWith('.'))
    .map((project) => path.join('demos', project.name)),
];

for (const directory of directories) {
  const files = globSync('**/*.{ts,js,jsx,mjs,cjs}', {
    cwd: directory,
    exclude: [
      '**/build/**',
      '**/node_modules/**',
      '**/server/**',
      '**/*.d.ts',
      '**/*.test.*',
    ],
  });

  if (
    !files.includes('main.ts') ||
    files.some((file) => !file.endsWith('.ts'))
  ) {
    throw new Error(
      `${directory}: apps must have main.ts and use TypeScript source files.`
    );
  }

  const bundle = await rolldown({
    input: Object.fromEntries(
      files.map((file) => [
        file.slice(0, -3).replaceAll(path.sep, '/'),
        path.resolve(directory, file),
      ])
    ),
    external: () => true,
    tsconfig: false,
  });
  try {
    rmSync(path.join(directory, 'build'), {recursive: true, force: true});
    await bundle.write({
      dir: path.join(directory, 'build'),
      entryFileNames: '[name].js',
      format: 'esm',
      sourcemap: true,
    });
  } finally {
    await bundle.close();
  }
  console.log(`Built ${directory}.`);
  builtProjects++;
}

console.log(`Built ${builtProjects} app(s).`);
