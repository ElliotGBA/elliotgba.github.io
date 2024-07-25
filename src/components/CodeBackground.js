import React from 'react';
import "../css/custom-prism.css";

const CodeBackground = () => {
    return (
        <div className="absolute inset-0 -left-[9em] top-[11em] z-0 flex items-center justify-center">
            <pre className="">
                <code className="language-html">
                    {`
                    <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
                        <title>ElliotGBA.dev</title>
                        </head>
                        <body>
                            <div class="Frodo">
                                <p>I wish it did not have to happen in my time.</p>
                            </div>
                            <div class="Gandalf">
                                <p>So do I, and so do all who live to see such times.</p>
                                <p>But that is not for them to decide.</p>
                            </div>
                            <div class="Gandalf">
                                <p>
                                    All we have to do is decide what to do with the time that is given to us.
                                </p>
                            </div>
                            <div id="root"></div>
                        </body>
                        <footer>
                            <div class="hw">
                                <p>Oops! Almost forgot my Hello, World!</p>
                            </div>
                        </footer>
                    </html>
                    `}
                </code>
            </pre>
        </div>
    );
};

export default CodeBackground;