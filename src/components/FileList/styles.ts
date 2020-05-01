import styled from 'styled-components';

interface FileInfoProps {
  status: 'ok' | 'fail' | null;
}

export const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div<FileInfoProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  button {
    border: 0;
    background: transparent;
    color: #e83f5b;
    margin-left: 5px;
    cursor: pointer;

    svg {
      margin-right: 4px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
    }
  }

  div + div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${({ status }) => (status === 'ok' ? '#12a454' : '#c53030')};

    svg {
      margin-left: 4px;
    }
  }
`;
