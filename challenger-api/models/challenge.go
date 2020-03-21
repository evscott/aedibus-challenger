package models

type Challenge struct {
	ID           string `json:"id",pg:"id"`
	ChallengerID string `json:"challengerID",pg:"challenger_id"`
	CreatorID    string `json:"creatorID",pg:"creator_id"`
}

type Challenges []Challenge

type ChallengeResults struct {
	ChallengeID string `json:"challengeID",pg:"challenge_id"`
	TestsRan    string `json:"testsRan",pg:"tests_ran"`
	TestsPassed string `json:"testsPassed",pg:"tests_passed"`
}
