import React from 'react';
import { FiTrash, FiXCircle, FiCheckCircle } from 'react-icons/fi';

import { Container, FileInfo } from './styles';

interface FileProps {
  name: string;
  readableSize: string;
  randomKey: string;
  status: 'ok' | 'fail' | null;
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
          <FileInfo status={uploadedFile.status}>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
              <button
                type="button"
                className="remove"
                onClick={() => handleRemove(uploadedFile.randomKey)}
              >
                {!uploadedFile.status && (
                  <>
                    <FiTrash /> Remover arquivo
                  </>
                )}
              </button>
            </div>
            {uploadedFile.status && (
              <div>
                {uploadedFile.status === 'ok' && (
                  <>
                    Enviado com sucesso
                    <FiCheckCircle size={28} />
                  </>
                )}
                {uploadedFile.status === 'fail' && (
                  <>
                    Enviou falhou
                    <FiXCircle size={28} />
                  </>
                )}
              </div>
            )}
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
