import styled from 'styled-components'

const Button = styled.button`
  --btn-border: #1e88e5;
  --btn-from: #64b5f6;
  --btn-to: #42a5f5;
  --btn-gloss: #bbdefb;
  --btn-color: #e3f2fd;
  --btn-hover-from: #90caf9;
  --btn-active-border: #1976d2;

  display: inline-flex;
  margin-bottom: 0;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  whitespace: nowrap;
  padding: 4px 8px;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid transparent;
  text-decoration: none;
  user-select: none;
  color: var(--btn-color);
  border-color: var(--btn-border);
  background: linear-gradient(to bottom, var(--btn-from) 0%, var(--btn-to) 100%);
  box-shadow: inset 0 1px var(--btn-gross), 0 1px 2px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  &,
  &:active,
  &.active {
    &:focus {
      outline: thin dotted;
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }
  }

  &:hover,
  &:focus,
  &.focus {
    text-decoration: none;
    color: #fff;
  }

  &:active,
  &.active {
    outline: 0;
    background-image: none;
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
  }
  
  &:hover,
  &:focus,
  &.focus {
    border-color: var(--btn-to);
    background: linear-gradient(to bottom, var(--btn-hover-from) 0%, var(--btn-from) 100%);
    box-shadow: inset 0 1px $color, 0 2px 3px rgba(0, 0, 0, 0.2);
  }
  &:active,
  &.active {
    border-color: var(--btn-active-border);
    color: var(--btn-gloss);
    background: linear-gradient(to bottom, var(--btn-to) 0%, var(--btn-border) 100%);
    box-shadow: inset 0 2px 2px var(--btn-active-border);
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    background: var(--btn-hover-from);
    border-color: var(--btn-from);
  }
  &.btn-success {
    --btn-border: #1ee588;
    --btn-from: #64f6b5;
    --btn-to: #42f5a5;
    --btn-gloss: #bbfbde;
    --btn-color: #e3fdf2;
    --btn-hover-from: #90f9ca;
    --btn-active-border: #19d276;
    &:disabled {
      opacity: 0.6;
    }
  }
  &.btn-danger {
    --btn-border: #e54d3b;
    --btn-from: #ff6250;
    --btn-to: #ff6250;
    --btn-gloss: #ff806c;
    --btn-color: #ffa293;
    --btn-hover-from: #ff806c;
    --btn-active-border: #e54d3b;
  }
`
export default Button
