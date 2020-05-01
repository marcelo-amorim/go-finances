import filesize from 'filesize';

const parseReadableSize = (size: number): string => filesize(size);

export default parseReadableSize;
