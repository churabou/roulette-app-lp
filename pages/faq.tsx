import { css } from "@emotion/css";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/Accordion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "ルーレットに何項目入力することができますか？",
    answer:
      "最大300項目入力することができます。ただ、推奨される項目の入力数は50程度になります。",
  },
  {
    question: "ルーレットには最大何項目入力することができますか？",
    answer:
      "最大で300項目まで入力することができます。ただ推奨される項目の入力数は多くても50程度になります。それ以上入力する場合はレイアウトが崩れる可能性があります",
  },
  {
    question: "当選した項目を除いてもう一度ルーレットを回す方法はありますか？",
    answer:
      "設定画面から重複の設定が可能です。重複を許容しないを選択すると、一度当選した項目は当たらなくなります",
  },
  {
    question: "広告消すにはどうしたらいいですか？",
    answer:
      "申し訳ございませんが、広告を非表示にする方法はありません。現在広告なしの有料版の開発を検討中ですので、今しばらくお待ちください。",
  },
];
// Your app...
export const AccordionDemo = () => (
  <Accordion type="multiple">
    {faqs.map(({ question, answer }) => (
      <AccordionItem key={question} value={question}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const styles = {
  root: css`
    margin: 0px auto;
    width: min(900px, 96%);

    h2 {
      font-size: 24px;
      padding: 24px 12px;
    }

    > div {
    }
  `,
};
export default function Faq() {
  return (
    <div className={styles.root}>
      <h2>よくある質問</h2>
      <div>
        <AccordionDemo />
      </div>
    </div>
  );
}
