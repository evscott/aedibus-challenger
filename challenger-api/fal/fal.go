package fal

import (
	"code.sajari.com/storage"
	"context"
	"fmt"
)

type FileType string

const (
	Instructions FileType = "./instructions"
	Tests        FileType = "./tests"
)

func GetFile(ft FileType, cid string) ([]byte, error) {
	ctx := context.Background()

	local := storage.Local(ft)
	f, err := local.Open(ctx, fmt.Sprintf("%s", cid))
	if err != nil {
		return nil, err
	}

	instructions := make([]byte, f.Size)
	n, err := f.Read(instructions)
	if err != nil {
		return nil, err
	}

	err = f.Close()
	if err != nil {
		return nil, err
	}

	return instructions, nil
}

func CreateFile(ft FileType, cid string, instructions []byte) error {
	ctx := context.Background()

	local := storage.Local(ft)
	f, err := local.Create(ctx, fmt.Sprintf("%s", cid))
	if err != nil {
		return err
	}

	_, err = f.Write(instructions)
	if err != nil {
		return err
	}

	err = f.Close()
	if err != nil {
		return err
	}

	return nil
}

func DeleteFile(ft FileType, cid string) error {
	ctx := context.Background()

	local := storage.Local(ft)
	err := local.Delete(ctx, fmt.Sprintf("%s", cid))
	if err != nil {
		return err
	}

	return nil
}
