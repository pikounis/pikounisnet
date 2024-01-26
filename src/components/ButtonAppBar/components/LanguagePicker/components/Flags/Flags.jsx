import React from "react";
import './Flags.css';
import gr from '../../../../../../assets/flags/gr.svg';
import uk from '../../../../../../assets/flags/uk.svg';
import ind from '../../../../../../assets/flags/in.svg';
import cn from '../../../../../../assets/flags/cn.svg';
import ar from '../../../../../../assets/flags/ar.svg'; // Adjusted to 'ar'
import fr from '../../../../../../assets/flags/fr.svg';
import es from '../../../../../../assets/flags/es.svg';

function Flags({ flagCode }) {
    const flagImages = { gr, uk, ind, cn, ar, fr, es };

    const flagImage = flagImages[flagCode];

    return flagImage ? <img className="flag-image" src={flagImage} alt={`${flagCode} flag`} /> : null;

}

export default Flags;
