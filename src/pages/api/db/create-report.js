//
import axios from "axios";

export default async function handler(req, res) {
  const {
    user_id,
    report_name,
    tags,
    template_definition = {},
    tagResults,
    document_ids,
    report_type = "standard",
    initialPrompt = "",
    file_type = "docx",
    baseTemplateURL = "",
    generated_report_url = "",
    report_hidden = false,
    generated_report = false,
    metadata = {},
    tag_chunks_to_process,
    tag_chunks_processed,
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
        template_definition,
        tagResults,
        document_ids,
        initial_prompt: initialPrompt,
        report_type,
        file_type,
        base_template_url: baseTemplateURL,
        generated_report_url,
        report_hidden,
        generated_report,
        tag_chunks_to_process,
        tag_chunks_processed,
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
