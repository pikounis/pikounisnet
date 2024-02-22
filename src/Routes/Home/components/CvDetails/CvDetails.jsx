import React from 'react';
import "./CvDetails.css"
import { Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CV from '../../../../assets/CV_PIKOUNIS_ANASTASIOS.pdf'

const CvDetails = () => {
    // URL to your CV - update this to the actual URL of your CV
    const cvUrl = CV

    return (
        <div className="cv-div">
            <Button
                variant="contained"
                color="primary"
                onClick={() => window.open(cvUrl, '_blank')}
                startIcon={<PictureAsPdfIcon />}
            >
                CV
            </Button>
        </div>

    );
};

export default CvDetails;
