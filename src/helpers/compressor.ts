import imageCompression from 'browser-image-compression';

export const compressImage = async (file: File) => {
  const options = {
    maxSizeMB: 0.07,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    const fileResult = new File([compressedFile], file.name, {
      type: file.type,
      lastModified: Date.now(),
    });

    return fileResult
  } catch (error) {
    console.error('Error while compressing the image:', error);
    throw error;
  }
};
