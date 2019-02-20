/**
 * Returns env configs
 * @returns { { backend: { url: {string} }, frontend: { url: {string} } auth: { jwtToken: {string} }, tracking: { google: { trackingId: {string} } } } }
 */
export const configs = () => {
    const env = process.env.NODE_ENV || 'development';

    return require(`../../../vars/${ env }/vars.json`);
};
