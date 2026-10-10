# Final Cut Pro 편집과 왕복 작업 사전

[학습자료 열기](https://kingofmental.github.io/final-cut-pro-guide/)

기본 편집 경험이 있는 제작자를 위한 한국어 HTML 학습자료입니다. **8부·83항목**, 직접 만든 원리 도식, 6가지 조작 실험, 문제별 색인, 검색, 용어·단축키, 브라우저에 저장되는 읽음 표시와 왕복 체크리스트를 제공합니다.

1. 작업 설계와 소재 관리
2. 자석 타임라인과 정밀 편집
3. 음악·사운드·시간
4. 화면·합성·재사용
5. 화면 전환과 시네마틱 연결: 마스크 와이프, 가림, 통로, 매치, 휘프, 줌, 소리, 촬영 준비
6. 색관리·출력·문제 해결
7. 실제 사례·숏폼 구성·롱폼 여행 영화: 비트 몽타주, 필름·컷아웃 템플릿, 전체 음악 시퀀스, 공개 발췌 분석
8. Final Cut × Resolve 왕복 워크플로우: 15항목, XML·conform·handles·반환·수정 관리

## 기준과 범위

2026-10-10 확인한 Apple Final Cut Pro 12.4 릴리스 노트와 공식 가이드를 사용합니다. Resolve 왕복 원리는 Blackmagic 공식 Colorist Guide 20을 참고하되, 설치 버전·운영체제·코덱·XML 호환은 실제 짧은 프로젝트로 검수하도록 안내합니다.

두 앱 사이의 타임라인·색 노드가 기본 기능으로 실시간 동기화된다고 설명하지 않습니다. XML·새 렌더·검수·교체로 작업을 갱신합니다. 실제 사용자 앱에서 수행한 왕복 결과를 주장하지 않습니다.

실제 FCP 화면 16장(Apple 공식 가이드), 생성한 연습용 사진 2세트, 제공 영상과 공개 템플릿 및 롱폼 작품 미리보기의 제한된 분석용 프레임을 사용하며 각각 출처를 표시합니다. 관찰한 결과와 재현 제안은 구분합니다. 3~4분 한 곡 본편·음악 연장·두 곡 이상 구성과 병행 작업용 공통 원본·버전 폴더 관리가 기본입니다.

Sam Kolder·Brandon Li·경식스필름 및 Watchtower of Turkey의 전체 원작 씬 분석은 원본 재생 미확보로 아직 완료하지 않았습니다. 작품 링크·확인 상태를 명시하고 강의 커리큘럼을 씬 분석으로 대신하지 않습니다. 공개 템플릿 사례는 플랫폼 전체 유행 순위로 제시하지 않습니다.

## 수정과 빌드

- `content/book.json`: 원고
- `tools/build.py`: HTML 생성
- `docs/assets/figures.js`: 도식과 계산 실험
- `docs/assets/app.js`: 검색·이동·로컬 학습 상태
- `docs/assets/site.css`: 반응형 스타일

```sh
python3 tools/build.py
python3 -m http.server 8000 --directory docs
```

본문 수정 후 생성된 `docs/index.html`도 함께 커밋합니다. `main`에 배포 파일을 반영하면 GitHub Actions가 `docs`를 Pages로 배포합니다. 저장소 **Settings → Pages → Source: GitHub Actions** 설정이 필요합니다.

PDF를 생성하거나 기존 이미지를 재생성할 필요 없이 HTML을 갱신합니다. 학습 상태는 기기·브라우저별로 보관되며 계정 동기화 기능은 없습니다.

[색보정 교재](https://kingofmental.github.io/color-grading-guide/)
