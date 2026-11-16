import {UIButton, UIPanel} from 'xrblocks';
import {getLanguage, LANGUAGES} from './translationConfig.js';

/** Translation choices built from the pinned SDK's public UI components. */
export class TranslationPicker extends UIPanel {
  private readonly toggle: UIButton;
  private readonly menu: UIPanel;
  private readonly buttons: UIButton[];

  constructor(select: (code: string | null) => void) {
    super({style: {flexGrow: 1, flexBasis: 0, gap: 6}});
    this.toggle = new UIButton({
      label: 'Translate: Off',
      style: {fontSize: 22},
      onClick: () => {
        this.menu.style.display =
          this.menu.style.display === 'none' ? 'flex' : 'none';
      },
    });
    const choices = [{code: null, label: 'Off'}, ...LANGUAGES];
    this.buttons = choices.map(
      ({code, label}) =>
        new UIButton({
          label,
          style: {fontSize: 22},
          onClick: () => {
            this.menu.style.display = 'none';
            select(code);
          },
        })
    );
    this.menu = new UIPanel({
      style: {display: 'none', gap: 6},
      children: this.buttons,
    });
    this.add(this.toggle, this.menu);
  }

  refresh(code: string | null, disabled: boolean): void {
    this.toggle.label = `Translate: ${code ? getLanguage(code).label : 'Off'}`;
    this.toggle.disabled = disabled;
    for (const button of this.buttons) button.disabled = disabled;
    if (disabled) this.menu.style.display = 'none';
  }

  override dispose(): void {
    this.toggle.onClick = undefined;
    for (const button of this.buttons) button.onClick = undefined;
  }
}
