import filesize from 'filesize';

const readableSize = (size: number): string => filesize(size);

export default readableSize;
