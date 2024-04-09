import { forwardRef, useCallback } from 'react';

import { type TextAreaProps } from './TextArea.interfaces';
import { TextAreaBase } from './TextArea.styles';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { onChange, onBlur, trimValue = true } = props;

    const onBlurHandler = useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement>) => {
        if (trimValue) {
          event.target.value = event.target.value.trim();
          onChange?.(event);
        }

        onBlur?.(event);
      },
      [onChange, onBlur, trimValue]
    );

    return <TextAreaBase {...props} onBlur={onBlurHandler} ref={ref} />;
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
