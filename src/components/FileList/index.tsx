import React from 'react';
import { FiTrash } from 'react-icons/fi';

import { Container, FileInfo } from './styles';

interface FileProps {
  name: string;
  readableSize: string;
  randomKey: string;
}

interface FileListProps {
  files: FileProps[];
  onHandleRemove: Function;
}

// const handleRemove = () =>

const FileList: React.FC<FileListProps> = ({
  files,
  onHandleRemove,
}: FileListProps) => {
  function handleRemove(key: string): void {
    onHandleRemove(key);
  }

  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.randomKey}>
          <FileInfo>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
              <button
                type="button"
                className="remove"
                onClick={() => handleRemove(uploadedFile.randomKey)}
              >
                <FiTrash />
                Remover arquivo
              </button>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
