import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>고등 수학 과외 모집</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div className="container">
        <header>
            <div className="header-content">
                <div className="header-text">
                <h1>한양대학교 정시 의예과 최초합</h1>
                <h1>서울대학교 정시 컴퓨터공학부 최초합</h1>
                <h1>인하대학교 정시 의예과 합격</h1>
                </div>
                <img src="/snu.png" alt="SNU" className="header-logo" />
            </div>
        </header>

        <section className="program">
          <h2>
            동계방학 동안 1등급/만점을 목표로
            <br />
            고등수학 심화개념 및 활용을 진행할 학생을 모집합니다.
          </h2>
          <ul>
            <li>
              <strong>수업과목</strong> 수학1, 수학2, 확률과 통계, 미적분
            </li>
            <li>
              <strong>수업시간</strong> 5수업에 한 과목의 절반을 나가는 것을 목표로 합니다.
            </li>
            <li>
              <strong>수업내용</strong> 1수업에 2시간 진행을 합니다.
            </li>
            <li>
              <strong>과외비용</strong> 60,000원 / 시간
            </li>
          </ul>
        </section>

        <section className="group-program">
          <h2>
            동계방학 동안 성적향상을 목표로
            <br />
            고등수학 심화개념 및 활용을 진행할 <strong>그룹</strong>을 모집합니다.
          </h2>
          <ul>
            <li>
              <strong>수업과목</strong> 수학1, 수학2, 확률과 통계, 미적분
            </li>
            <li>
              <strong>수업진도</strong> 5수업에 한 과목의 절반을 나가는 것을 목표로 합니다.
            </li>
            <li>
              <strong>수업시간</strong> 1수업에 2시간 진행을 합니다.
            </li>
            <li>
              <strong>참여인원</strong> 2명 ~ 최대 4명
            </li>
            <li>
              <strong>과외비용</strong> 45,000원 / 1인, 시간
            </li>
          </ul>
        </section>

        <footer>
          <p>010.2058.7356</p>
          <a href="https://open.kakao.com/" className="kakao-btn">
            카카오톡 문의
          </a>
        </footer>
      </div>
    </>
  );
}
