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
}

// const handleRemove = () =>

const FileList: React.FC<FileListProps> = ({ files }: FileListProps) => {
  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.randomKey}>
          <FileInfo>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
              <button type="button" className="remove">
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
