import { RefObject } from 'react'

/**
 * One active trap in the shared stack. Only the topmost entry reacts to keyboard
 * and focus events, so nested dialogs behave correctly on their own.
 */
export interface IFocusTrapEntry {
  id: symbol
  containerRef: RefObject<HTMLElement>
}

/**
 * Snapshot of a guarded element's state before the trap hid it, so it can be
 * restored to exactly what it was.
 */
export interface IGuardedElementState {
  ariaHidden: string | null
  hadInert: boolean
}

export interface IUseFocusTrapOptions {
  /**
   * Engages the trap. Turn it off while the dialog stays mounted but hidden
   * (e.g. behind a nested dialog) so focus and the guards are handed over.
   */
  active: boolean
  /**
   * Ref to the dialog content element. It should carry `tabIndex={-1}` so it can
   * receive focus when it holds no focusable children.
   */
  containerRef: RefObject<HTMLElement>
  /**
   * Called when `Escape` is pressed while this trap is topmost. Omit it to make
   * `Escape` a no-op (e.g. for dialogs that block closing from the backdrop).
   */
  onEscape?: () => void
  /**
   * Element to focus when the trap engages. Defaults to the first focusable
   * child, then to `containerRef` itself.
   */
  initialFocusRef?: RefObject<HTMLElement>
  /**
   * Element to focus when the trap releases. Defaults to whatever was focused
   * right before it engaged (usually the control that opened the dialog).
   */
  returnFocusRef?: RefObject<HTMLElement>
}
