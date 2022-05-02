import React from "react";
import{Icon} from '@iconfy/react';

function Footer (){
    return(
        <div class="container">
            <footer className="Footer">
                <div className="row">
                    <div className="col d-flex justiy-content-end text-end">
                        <a href="mailto: johnpohl34@gmail.com">
                            <Icon icon="dashicons:email" id='icons' style={{fontSize:'25px'}}/>
                        </a>
                    </div>
                    <div className="col d-flex justify-content-center text-center">
                        <a href="https://www.linkedin.com/in/john-pohl-871437225/" target="_blank">
                            <Icon icon= "fa-brands:linkedin"  id='icons'style={{fontSize:'25px'}}/>
                        </a>
                    </div>
                    <div className="col d-flex justify-content-start text-start">
                        <a href="https://github.com/Johnpo34" target="_blank">
                            <Icon icon="ant-design:github-filled" id='icons' style={{fontSize:'25px'}}/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer