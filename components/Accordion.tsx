import React, { ComponentProps } from "react";
import { blue, blackA, mauve } from "@radix-ui/colors";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Primitive from "@radix-ui/react-accordion";
import { css, cx, keyframes } from "@emotion/css";

const slideDown = keyframes`
  from { height: 0 };
  to { height: var(--radix-accordion-content-height) };
`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height) };
  to { height: 0 };
`;

const styles = {
  accordion: css`
    border-radius: 6px;
    width: min(90%, 700px);
    background: ${mauve.mauve6};
    box-shadow: 0 2px 10px ${blackA.blackA4};
  `,

  item: css`
    overflow: hidden;
    margin-top: 1px;

    &:first-child {
      margin-top: 0px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:focus-within {
      position: relative;
      z-index: 1;
      box-shadow: 0 0 0 2px ${mauve.mauve12};
    }
  `,

  header: css`
    all: unset;
    display: flex;
  `,
  trigger: css`
    all: unset;
    background: transparent;
    padding: 0px 20px;
    height: 45px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    line-height: 1;
    color: ${blue.blue11};
    box-shadow: 0 1px 0 ${mauve.mauve6};
    &[data-state="closed"] {
      background: white;
    }
    &[data-state="open"] {
      background: white;
    }
    &:hover {
      background: ${mauve.mauve2};
    }
  `,
  chevron: css`
    color: ${blue.blue10};
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
    /* 親の属性に応じてスタイルを当ててる。子から親への依存ではなく期待と捉えてる。 */
    [data-state="open"] & {
      transform: rotate(180deg);
    }
  `,
  content: css`
    overflow: hidden;
    font-size: 15px;
    color: ${mauve.mauve11};
    background: ${mauve.mauve2};
    &[data-state="open"] {
      animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
    &[data-state="closed"] {
      animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
  `,
  contentText: css`
    padding: 15px 20px;
  `,
};

type AccordionProps = ComponentProps<typeof Primitive.Accordion>;

export const Accordion = ({ className, ...rest }: AccordionProps) => {
  return (
    <Primitive.Accordion
      className={cx(styles.accordion, className)}
      {...rest}
    />
  );
};

export const AccordionItem = ({
  className,
  ...rest
}: Primitive.AccordionItemProps) => {
  return (
    <Primitive.AccordionItem className={cx(styles.item, className)} {...rest} />
  );
};

export const AccordionTrigger = React.forwardRef<HTMLElement, any>(
  ({ children, className, ...rest }, forwardedRef) => (
    <Primitive.Header className={styles.header}>
      <Primitive.Trigger
        ref={forwardedRef}
        className={cx(styles.trigger, className)}
        {...rest}
      >
        {children}
        <ChevronDownIcon aria-hidden className={styles.chevron} />
      </Primitive.Trigger>
    </Primitive.Header>
  )
);

export const AccordionContent = React.forwardRef<HTMLElement, any>(
  ({ children, ...props }, forwardedRef) => (
    <Primitive.Content {...props} ref={forwardedRef} className={styles.content}>
      <div className={styles.contentText}>{children}</div>
    </Primitive.Content>
  )
);
