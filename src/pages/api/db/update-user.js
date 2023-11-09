//
import axios from "axios";

export default async function handler(req, res) {
  const {
    uuid,
    email,
    first_name,
    last_name,
    phone_number,
    address_line1,
    address_line2,
    address_line3,
    address_line4,
    company,
    role = "readOnly",
    metadata = {},
    authToken,
  } = req.body;
  try {
    const { data } = await axios({
      method: "put",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/update-user`,
      data: {
        uuid,
        email,
        first_name,
        last_name,
        phone_number,
        address_line1,
        address_line2,
        address_line3,
        address_line4,
        company,
        role,
        metadata,
      },
      headers: {
        Authorization: process.env.MANAGE_APPLICATION_TOKEN,
        engageSession: authToken,
      },
    });

    res.status(200).send(data);
  } catch (e) {
    console.log("e ", e);
    res.status(500).send({ error: e.message });
  }
}
