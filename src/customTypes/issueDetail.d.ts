/* eslint-disable @typescript-eslint/no-explicit-any */

export interface User {
  avatar_url: string; // 사용자 아바타 이미지 URL
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string; // 사용자 GitHub 프로필 URL
  id: number; // 사용자 고유 ID
  login: string; // 사용자 로그인 아이디
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string; // 사용자 타입 (예: "User")
  url: string; // 사용자 정보 URL
}

export interface Label {
  id: number; // 라벨 고유 ID
  node_id: string;
  url: string; // 라벨 정보 URL
  name: string; // 라벨 이름
  color: string; // 라벨 색상 코드
}

export interface Reaction {
  '+1': number;
  '-1': number;
  confused: number;
  eyes: number;
  heart: number;
  hooray: number;
  laugh: number;
  rocket: number;
  total_count: number; // 전체 반응 개수
}

export interface IssueProps {
  url: string; // 이슈 정보 URL
  repository_url: string; // 이슈가 속한 리포지토리 정보 URL
  labels_url: string; // 라벨 정보 URL
  comments_url: string; // 코멘트 정보 URL
  events_url: string;
  active_lock_reason: string | null; // 현재 잠긴 상태인 경우의 이유
  assignee: any; // 담당자 정보 (타입 지정 필요)
  assignees: any[]; // 담당자 목록 (타입 지정 필요)
  author_association: string; // 작성자 관련 정보
  body: string; // 이슈 내용
  closed_at: string | null; // 닫힌 날짜
  closed_by: any; // 닫은 사용자 정보 (타입 지정 필요)
  comments: number; // 코멘트 개수
  created_at: string; // 생성된 날짜
  events: any[]; // 이벤트 목록 (타입 지정 필요)
  html_url: string; // 이슈 웹 페이지 URL
  id: number; // 이슈 고유 ID
  labels: Label[]; // 라벨 목록
  locked: boolean; // 잠긴 상태 여부
  milestone: any; // 이슈의 마일스톤 정보 (타입 지정 필요)
  node_id: string;
  number: number; // 이슈 번호
  performed_via_github_app: any; // GitHub 앱을 통한 작업 정보 (타입 지정 필요)
  reactions: Reaction; // 이슈 반응 정보
  repository_url: string; // 이슈가 속한 리포지토리 정보 URL
  state: string; // 이슈 상태 ("open" 또는 "closed")
  state_reason: string | null; // 상태 변경 이유
  timeline_url: string; // 이슈 타임라인 정보 URL
  title: string; // 이슈 제목
  updated_at: string; // 최종 업데이트 날짜
  user: User; // 작성자 정보
}
