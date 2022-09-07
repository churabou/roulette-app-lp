import { css } from "@emotion/css";

const rootStyle = css`
  line-height: 1.8;
  width: min(800px, 96%);
  margin: 0px auto;
  padding: 40px;

  header {
    margin-bottom: 60px;
  }

  h2 {
    font-size: 2rem;
  }

  section {
    margin-bottom: 60px;
  }

  h4 {
    font-size: 1.6rem;
    padding-bottom: 16px;
    margin-bottom: 36px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      height: 4px;
      border-radius: 4px;
      background: black;
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
    }
  }
`;

export const Privacy = () => {
  const appName = "ルーレット!";
  return (
    <div className={rootStyle}>
      <header>
        <h2>プライバシーポリシー</h2>
        {appName}
        （以下,「本サービス」といいます。）は，ユーザー情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
      </header>
      <section>
        <h4>１. 個人情報</h4>
        本サービスは、個人情報の取得・利用・その他の取り扱いについて個人情報保護に関する法律及びその他の関連法令を遵守致します。
      </section>
      <section>
        <h4>２. 個人情報の収集</h4>
        本サービスは、お客様からのお問い合わせやご意見を頂戴する際に送信元のメールアドレス・端末を識別する情報及びお問い合わせ内容を収集致します。
      </section>
      <section>
        <h4>３. 個人情報を収集・利用する目的</h4>
        本サービスが個人情報を収集・利用する目的は，以下のとおりです。
        <li>本サービスの提供・運営のため</li>
        <li>お客様からのお問い合わせに回答するため </li>
        <li>必要な場合にご連絡を取るため</li>
        <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
        <li>上記の利用目的に付随する目的 </li>
      </section>
      <section>
        <h4>４.　個人情報の第三者提供</h4>
        本サービスは，お客様の個人情報の適切な管理に努めます。法令に基づき開示する必要がある場合を除き、あらかじめお客様の同意を得ることなく，第三者に個人情報を提供することはありません。
        本サービスでは、広告配信のためにGoogle AdMob ,
        利用状況解析のためにGoogle Firebase Analytics , Google 及び
        Crashlyticsを使用する場合がございます。
        取得する情報、利用目的、第三者への提供等の情報につきましては、以下のプライバシーポリシーのリンクよりご確認ください。
        <br />
        <li>
          <a href="https://policies.google.com/technologies/ads?hl=ja">
            Google AdMob
          </a>
        </li>
        <li>
          <a href="https://firebase.google.com/support/privacy?hl=ja ">
            Google Firebase Analytics , Google Analytics{" "}
          </a>
        </li>
        <li>
          <a href="https://firebase.google.com/terms/crashlytics?hl=ja">
            Crashlytics
          </a>
        </li>
      </section>
      <section>
        <h4>５. 個人情報の管理</h4>
        本サービスは，お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、安全対策を実施して個人情報の厳重な管理を行います。
      </section>
      <section>
        <h4>６. プライバシーポリシーの見直し</h4>
        本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
        変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
        本サービスは、保有する個人情報に関連する法令、その他の規範を遵守するとともに本ポリシーの内容の適宜見直しを図り、改善に努めます。
      </section>
    </div>
  );
};

export default Privacy;
