import axios from 'axios';

export const teardown = async () => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: `${Cypress.env('E2E_GUIDE_API_URL')}admin/teardown`,
            data: {
                email_address: 'test@ningi.co.uk'
            }
        });
        console.log('teardown complete ', data);
    } catch (e) {
        console.log('E > ', e);
    }
};

export const createUser = async () => {
    try {
        await teardown();

        const { data } = await axios({
            method: 'POST',
            url: `${Cypress.env('E2E_GUIDE_API_URL')}admin/create-user`,
            data: {
                email_address: 'test@ningi.co.uk'
            }
        });
        console.log('test user:', data);
    } catch (e) {
        console.log('E > ', e);
    }
};
