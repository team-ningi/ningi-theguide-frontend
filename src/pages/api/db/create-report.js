//
import axios from "axios";

export default async function handler(req, res) {
  const {
    user_id,
    report_name,
    tags,
    tagResults,
    document_ids,
    report_type = "standard",
    file_type = "docx",
    baseTemplateURL = "",
    generated_report_url = "",
    report_hidden = false,
    generated_report = false,
    metadata = {},
    authToken,
  } = req.body;
  try {
    const { data } = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_THE_GUIDE_API_URL}/add-report`,
      data: {
        user_id,
        report_name,
        tags,
        tagResults,
        document_ids,
        report_type,
        file_type,
        base_template_url: baseTemplateURL,
        generated_report_url,
        report_hidden,
        generated_report,
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
