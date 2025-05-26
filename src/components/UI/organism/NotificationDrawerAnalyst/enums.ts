export enum AnalystNotificationType {
  requests = 'requests',
  candidateManagement = 'candidateManagement',
  vacancyStatuses = 'vacancyStatuses',
  interviews = 'interviews'
}

export enum AnalystNotificationEvent {
  created = 'created',
  assigned = 'assigned',
  named = 'named',
  rejected = 'rejected',
  matchFound = 'matchFound'
}
