import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

interface DropzoneInterface {
    setAddFiles:  Function;
} 

const DropzoneComponent: React.FC<DropzoneInterface> = ({setAddFiles}) => {

    const [files, setFiles] = useState<any[]>([]);

    const onDrop = useCallback((acceptedFiles: any) => {

            const newFiles = acceptedFiles.map((file: any) => Object.assign(file, {
                preview: URL.createObjectURL(file),
            }));
            
            setFiles((item) => [...item, ...newFiles]);

            setAddFiles((item: any) => [...item, {
                preview: newFiles.preview,
                name: newFiles.name
            }]);
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        onDrop,
        accept: {
            'image/*': []
        }
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragAccept,
        isDragReject,
        isDragActive
      ]);

    const thumbs = files.map((file, i) => (
        <Col className='mt-5 d-inline' key={file.name+i} lg={6}>
            <Card className="bg-ligth text-white">
                <Card.Img width={200} height={200} src={file.preview} alt={file.name} />
                <Card.ImgOverlay>
                    <Card.Title>{file.name}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Col>
    ));

    // clean up
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section>
            <div {...getRootProps({ className: "dropzone", style})}>
                <input {...getInputProps()} />
                <div>Arrastre y suelte sus imagenes aquí. </div>
                <em>(Solo imagenes con extensiones *.jpeg y *.png)</em>
            </div>
            <aside>
                <Row>
                    {thumbs}
                </Row>
            </aside>
        </section>
    )
}

export default DropzoneComponent;