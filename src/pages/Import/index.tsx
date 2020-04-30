import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import crypto from 'crypto';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import readableSize from '../../utils/readableSize';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
  randomKey: string;
  error?: boolean;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();
  // console.log(history);

  async function handleUpload(): Promise<void> {
    if (uploadedFiles.length) {
      //* * solução com promise all */
      const uploads = uploadedFiles.map(uploadedFile => {
        const data = new FormData();
        data.append('file', uploadedFile.file);
        return api.post('/transactions/import', data);
      });
      // data.append('file', uploadedFile.file);
      Promise.all(uploads)
        .then(_response => {
          history.push('/');
        })
        .catch(erro => {
          console.log(erro);
        });
    }
  }

  function handleRemove(key: string): void {
    const filteredFiles = uploadedFiles.filter(
      uploadedFile => uploadedFile.randomKey !== key,
    );
    setUploadedFiles(filteredFiles);
  }

  function submitFile(files: File[]): void {
    const filesToUpload = files.map(
      (file): FileProps => ({
        file,
        name: file.name,
        readableSize: readableSize(file.size),
        randomKey: crypto.randomBytes(20).toString('hex'),
      }),
    );

    setUploadedFiles([...uploadedFiles, ...filesToUpload]);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} onHandleRemove={handleRemove} />
          )}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
