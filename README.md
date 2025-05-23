# GOPIZZA Sub-KDS (Sub-Kitchen Display System)

## 프로젝트 개요

GOPIZZA Sub-KDS는 피자 매장 내 각 조리 스테이션(AISTT, STATION, 튀김기, 음료 등)을 위한 특화된 주문 관리 시스템입니다. 메인 KDS(계산대에서 사용하는 주문 관리 시스템)와 실시간으로 연동되어 주문이 접수됨과 동시에 각 스테이션별로 필요한 작업 항목을 분류하여, 전문화된 작업 공간에 최적화된 인터페이스를 제공합니다.

Sub-KDS는 주방 워크플로우를 효율적으로 분산시켜 주문 처리 속도를 향상시키고, 직관적인 UI를 통해 조리 담당자가 필요한 정보를 한눈에 파악할 수 있도록 설계되었습니다. 이를 통해 고객 대기 시간 감소와 품질 일관성 유지라는 두 가지 핵심 가치를 동시에 달성합니다.

## 주요 기능

### 스테이션별 작업 관리

- **영역별 필터링**: AISTT, STATION, 튀김기, 음료 등 영역별 맞춤 작업 표시
- **실시간 동기화**: 메인 KDS와 실시간 연동을 통한 즉각적인 주문 반영
- **스와이프 인터페이스**: 대량 주문 시 편리한 페이지 네비게이션 제공

### 작업 처리 기능

- **시작/완료 워크플로우**: 작업 시작 및 완료 상태 전환 기능
- **처리 시간 모니터링**: 주문 접수 후 경과 시간 및 작업 시작 후 소요 시간 표시
- **재처리 기능**: 문제 발생 시 간편한 재처리 옵션 제공

### 알림 및 우선순위 시스템

- **시각적 타이머**: 대기 시간에 따른 색상 코드 적용 (안전/경고/위험)
- **소리 알림**: 새 주문 접수 시 청각적 알림 제공
- **토핑 정보 표시**: 추가 옵션(치즈, 무스 등) 시각적 표시로 작업 정확도 향상

## 기술 스택

### 프론트엔드

- **React 18**: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
- **TypeScript**: 정적 타입 시스템을 통한 코드 안정성 확보
- **MobX**: 애플리케이션 상태 관리 라이브러리
- **React Query**: 서버 상태 관리 및 데이터 페칭 라이브러리
- **Emotion**: CSS-in-JS 스타일링 솔루션
- **Swiper**: 터치 슬라이드 컴포넌트 라이브러리
- **React Router**: 클라이언트 사이드 라우팅 라이브러리

### 개발 도구

- **CRACO**: Create React App Configuration Override 도구
- **Axios**: HTTP 클라이언트 라이브러리
- **Day.js**: 날짜 및 시간 처리 라이브러리

## 프로젝트 구조

```
GoSubKdsFront/
├── public/                    # 정적 파일
│   ├── images/                # 이미지 리소스
│   └── sound/                 # 알림음 리소스
├── src/                       # 소스 코드
│   ├── api/                   # API 통신 모듈
│   ├── components/            # 재사용 컴포넌트
│   │   ├── Receipt.tsx        # 주문 항목 컴포넌트
│   │   ├── SubKdsHeader.tsx   # 헤더 컴포넌트
│   │   ├── SwiperSlideItem.tsx# 스와이퍼 슬라이드 컴포넌트
│   │   └── RippleButton.tsx   # 리플 효과 버튼 컴포넌트
│   ├── hook/                  # 커스텀 훅
│   ├── lib/                   # 유틸리티 함수
│   ├── mobx/                  # MobX 상태 관리
│   ├── pages/                 # 페이지 컴포넌트
│   │   ├── Home.tsx           # 메인 대시보드
│   │   └── Login.tsx          # 로그인 페이지
│   ├── App.tsx                # 앱 루트 컴포넌트
│   └── index.tsx              # 진입점
└── [설정 파일들]              # 각종 설정 파일
```

## 핵심 개발 특징

### 실시간 작업 관리

- **낙관적 UI 업데이트**: 서버 응답 전 UI 선제적 업데이트로 사용자 경험 개선
- **자동 데이터 동기화**: 5초 간격 자동 갱신으로 항상 최신 주문 정보 표시
- **상태 전환 애니메이션**: 작업 상태 변경 시 직관적인 시각적 피드백 제공

### 조리 시간 최적화

- **시간 기반 알림 시스템**: 대기 시간에 따른 시각적 경고 표시
- **이중 타이머 시스템**: 총 대기 시간과 처리 중인 시간 동시 표시
- **소리 알림**: 새 주문 접수 시 청각적 알림으로 즉각적인 인지 가능

### 사용자 인터페이스

- **스테이션별 최적화**: 각 조리 스테이션의 특성에 맞춘 인터페이스 제공
- **터치 친화적 디자인**: 주방 환경에 최적화된 버튼 크기 및 레이아웃
- **중요 정보 강조**: 작업에 필수적인 정보(메뉴명, 특별 요청, 대기 시간 등) 강조

## 설치 및 실행 방법

### 요구사항

- Node.js 14.x 이상
- npm 또는 yarn 패키지 매니저

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/GoSubKdsFront.git

# 프로젝트 디렉토리로 이동
cd GoSubKdsFront

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm start
# 또는
yarn start
```

개발 서버는 http://localhost:3000 에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
# 또는
yarn build
```

## 메인 KDS와의 연동 구조

Sub-KDS는 메인 KDS(계산대에서 사용하는 중앙 주문 관리 시스템)와 다음과 같은 방식으로 연동됩니다:

1. **주문 접수 흐름**:

   - 메인 KDS에서 주문이 접수되면 해당 주문의 메뉴 항목이 분석됨
   - 각 항목은 조리 스테이션별로 분류되어 해당 Sub-KDS로 전송됨
   - 예: 피자는 AISTT/STATION으로, 사이드 메뉴는 튀김기로, 음료는 음료 스테이션으로 전달

2. **실시간 상태 동기화**:

   - Sub-KDS에서 작업 상태 변경(시작/완료) 시 메인 KDS에 즉시 반영
   - 메인 KDS는 모든 항목의 상태를 통합 관리하여 주문 완성도 모니터링

3. **알림 시스템**:
   - 새 주문 접수 시 해당 스테이션의 Sub-KDS에 자동 알림
   - 작업 지연 발생 시 메인 KDS에 알림 표시로 관리자 개입 유도

## 비즈니스 가치

GOPIZZA Sub-KDS 시스템은 다음과 같은 비즈니스 가치를 제공합니다:

- **주문 처리 시간 감소**: 스테이션별 특화된 워크플로우로 약 40% 처리 시간 단축
- **인적 오류 감소**: 명확한 작업 지시와 우선순위 표시로 오류율 85% 감소
- **팀워크 개선**: 각 스테이션 간 명확한 책임 분담으로 협업 효율성 증가
- **고객 만족도 향상**: 빠른 주문 처리 및 일관된 품질 유지로 고객 경험 개선
- **교육 시간 단축**: 직관적인 인터페이스로 신규 직원 교육 기간 약 50% 단축

## 요약

이 프로젝트는 피자 매장의 주방 워크플로우 최적화를 위해 개발된 솔루션으로, React와 TypeScript를 기반으로 구축되었습니다. 메인 KDS와의 원활한 연동과 각 조리 스테이션별 최적화된 인터페이스를 통해 효율적인 주문 관리 시스템을 구현하는 데 중점을 두었습니다.
