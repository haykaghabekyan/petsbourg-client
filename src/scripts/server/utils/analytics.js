import { configs } from '../utils/config';

export const analyticsScript = `
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="//www.googletagmanager.com/gtag/js?id=${ configs().tracking.google.trackingId }"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ configs().tracking.google.trackingId }');
    </script>
`;

export const getAnalyticsScript = () => {
    const env = process.env.NODE_ENV || 'development';

    if (env !== 'development') {
        return analyticsScript;
    }

    return '';
};
