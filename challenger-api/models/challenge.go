package models

type Challenge struct {
	ID  string `json:"id",pg:"id"`
	CID string `json:"cid",pg:"cid"` // Challenger ID
	AID string `json:"aid",pg:"aid"` // Author ID
}

type Challenges []Challenge

type ChallengeResults struct {
	CID         string `json:"cid",pg:"cid"`
	TestsRan    string `json:"testsRan",pg:"tests_ran"`
	TestsPassed string `json:"testsPassed",pg:"tests_passed"`
}
