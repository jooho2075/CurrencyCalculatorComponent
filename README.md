# Currency Calculator Component — 환율 계산기 컴포넌트

환율 계산기 컴포넌트는 금융 관련 서비스를 만드는 개발자를 위해
환율 계산 화면을 Modal 창으로 띄워주는 컴포넌트입니다.

---

## ✨ 주요 기능

- 🤖 **오늘 환율에 따른 환율 계산 시스템**

| props | description |
|------|------|
| **from** | 송금 통화 국가 코드 |
| **to** | 수령 통화 국가 코드 |
| **bgColor** | 컴포넌트의 배경 색상 |
| **onClose** | 컴포넌트의 닫기 버튼 액션 |

## 컴포넌트 사용법

```
import { CurrencyForm } from "woorifisa6-currency-calculator";
import 'woorifisa6-currency-calculator/styles.css';

function App() {
  return (
    <CurrencyForm
      from="kr"
      to="us"
      bgColor="#f0f4f8"
      onClose={() => console.log("Closed")}
    />
  );
}
```

<br/>

## 🛠 기술 스택

| 분야 | 기술 |
|------|------|
| **언어** | JavaScript |
| **프론트엔드** | Vite + Tailwind CSS |
| **환율 서비스 API** | ExchangeRate API |

<br/>

## 🚀 빠른 시작

### 사전 요구사항

- Node.js 18 이상


### 설치 방법

1. **저장소 클론**
```bash
git clone https://github.com/jooho2075/CurrencyCalculatorComponent.git
cd CurrencyCalculatorComponent/currency-calculator
```

2. **의존성 설치**
```bash
npm install
```


4. **프론트엔드 실행 (새 터미널)**
```bash
npm run dev
```
브라우저에서 확인
http://localhost:5173

<br/>

## 👬 구성원 

| 이름 | 담당 |
|------|------|
| **송민혁** | npm 배포, 내부 API 연동  |
| **박주호** | 컴포넌트 UI 제작 |
| **이유림** | 홈 레이아웃, 컴포넌트 모달창 기능 적용 |
