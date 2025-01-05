# cs-phinx-client

```angular2html
src/
├── components/       # 공통 컴포넌트
│   ├── common/       # 여러 페이지에서 사용하는 일반적인 컴포넌트
│   │   ├── Button.vue
│   │   ├── Modal.vue
│   │   └── Navbar.vue
│   ├── layout/       # 레이아웃 관련 컴포넌트 (Header, Footer 등)
│   │   ├── Header.vue
│   │   └── Footer.vue
│   └── widgets/      # 특정 기능이나 모듈화된 위젯 컴포넌트
│       ├── Chart.vue
│       └── Map.vue
├── pages/            # 페이지 단위 컴포넌트
│   ├── HomePage.vue
│   ├── AboutPage.vue
│   └── AdminPage.vue
├── features/         # 특정 페이지에서만 사용하는 컴포넌트들
│   ├── admin/        # AdminPage에서만 사용하는 컴포넌트
│   │   ├── UserTable.vue
│   │   └── RoleManager.vue
│   ├── home/         # HomePage에서만 사용하는 컴포넌트
│   │   └── HeroBanner.vue
│   └── about/        # AboutPage에서만 사용하는 컴포넌트
│       └── TeamList.vue
├── api/              # API 요청/응답 타입과 함수
│   ├── user.ts
│   ├── product.ts
│   └── types.ts
├── types/            # 전역 타입 정의
│   ├── index.ts
│   ├── api.ts
│   ├── components.ts
│   └── models.ts
├── utils/            # 유틸리티 함수
│   ├── index.ts
│   ├── date.ts
│   ├── string.ts
│   └── validation.ts
└── App.vue           # 메인 앱 컴포넌트
```