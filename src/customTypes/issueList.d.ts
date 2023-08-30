/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IssueListProps {
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
