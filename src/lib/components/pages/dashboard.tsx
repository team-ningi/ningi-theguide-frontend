/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex, Button } from "theme-ui";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useRouter } from "next/navigation";
import { DashboardStateType } from "@/lib/types";
import {
  FileDotted,
  FileCode,
  Chat,
  Files,
  UploadSimple,
  Tag,
  CaretRight,
  ArrowFatRight,
} from "phosphor-react";
import { Title, Description } from "@/lib/components/TextItems";
import { GetStarted } from "@/lib/components/getStarted";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const itemMapSmall = {
  Documents: <Files size={16} />,
  Templates: <FileDotted size={16} />,
  Reports: <FileCode size={16} />,
  Chat: <Chat size={16} />,
  Tags: <Tag size={16} />,
};

export const itemMapBig = {
  Documents: <Files size={45} color="#9999ff" />,
  Templates: <FileDotted size={45} color="#9999ff" />,
  Reports: <FileCode size={45} color="#9999ff" />,
  Chat: <Chat size={45} color="#9999ff" />,
  Tags: <Tag size={45} color="#9999ff" />,
};

const defaultState = {
  showSuccess: false,
  user_id: "",
  customFilename: "",
  label: "",
  mode: "start",
  searchLabel: "",
  searchEmbedded: "all",
  searchFileType: "all",
  filters: false,
  docsFound: false,
  step1: "createReport",
};

const StepItem = ({
  step,
  title,
  icon,
  description,
}: {
  step: string;
  title: string;
  icon: string;
  description: string;
}) => (
  <Flex
    sx={{
      width: "180px",
      height: "280px",
      borderRadius: "8px",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      p: "10px 10px",
    }}
  >
    <Box sx={{ minHeight: "120px", width: "100%", border: "0px red solid" }}>
      <Paragraph sx={{ fontSize: "18px", color: "#666" }}>{step}</Paragraph>
      <Paragraph
        sx={{
          height: "25px",
          fontSize: "14px",
          mb: "20px",
          mt: "5px",
          color: "grey",
        }}
      >
        {title}
      </Paragraph>

      {
        // @ts-ignore
        itemMapBig[icon]
      }
    </Box>
    <Paragraph sx={{ color: "#666", fontSize: "15px", mt: "25px" }}>
      {description}
    </Paragraph>
  </Flex>
);

const Item = ({
  icon,
  title,
  type,
  urls,
  router,
  singleLink,
}: {
  icon: string;
  title: string;
  type: string;
  urls: string[];
  router: AppRouterInstance;
  singleLink?: boolean;
}) => (
  <Box
    sx={{
      border: "1px grey dashed",
      borderRadius: "12px",
      backgroundColor: "transparent",
      width: "160px",
      height: "200px",
      mb: "40px",
    }}
  >
    <Flex
      sx={{
        width: "100%",
        border: "0px solid green",
        height: "30px",
        mt: "10px",
        pl: "0px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paragraph
        sx={{
          width: "100%",
          textAlign: "center",
          fontWeight: "300",
          fontSize: "16px",
        }}
      >
        {title}
      </Paragraph>
    </Flex>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {singleLink && (
        <Button
          variant="primary"
          sx={{
            color: "#444",
            border: "1px solid #444",
            background: "transparent",
            // color: "white",
            cursor: "pointer",
            mt: "25px",

            height: "40px",
            width: "110px",
            fontSize: "14px",
          }}
          onClick={async () => router.push(urls[0])}
        >
          <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
            <Paragraph sx={{ mr: "3px" }}>{title}</Paragraph>

            {
              // @ts-ignore
              itemMapSmall[icon]
            }
          </Flex>
        </Button>
      )}
      {!singleLink && (
        <>
          <Button
            variant="primary"
            sx={{
              color: "#444",
              border: "1px solid #444",
              background: "transparent",
              // color: "white",
              cursor: "pointer",
              mt: "25px",

              height: "40px",
              width: "110px",
              fontSize: "14px",
            }}
            onClick={async () => router.push(urls[0])}
          >
            <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
              <Paragraph sx={{ mr: "3px" }}>View</Paragraph>

              {
                // @ts-ignore
                itemMapSmall[icon]
              }
            </Flex>
          </Button>
          <Button
            variant="primary"
            sx={{
              color: "#444",
              border: "1px solid #444",
              background: "transparent",
              cursor: "pointer",
              mt: "20px",
              height: "40px",
              width: "110px",
              fontSize: "14px",
            }}
            onClick={async () => router.push(urls[1])}
          >
            <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
              <Paragraph sx={{ mr: "3px" }}>
                {type === "reports" ? "Create" : "Upload"}
              </Paragraph>
              <UploadSimple size={16} />
            </Flex>
          </Button>
        </>
      )}
    </Flex>
  </Box>
);

const DashboardComponent = ({ loading }: { loading: boolean }) => {
  const [state, updateState] = useState<DashboardStateType>(defaultState);
  const router = useRouter();

  useEffect(() => {}, []);

  if (loading) return;

  return (
    <Box
      className="sectionContainer"
      sx={{
        width: "900px",
        opacity: 1,
        mt: "30px",
        mb: "100px",
        minHeight: "600px",
        textAlign: "center",
        backgroundColor: "transparent",
        border: "0px solid blue",
        ml: "0px",
        "@media screen and (max-width: 1275px)": { width: "600px" },
        "@media screen and (max-width: 700px)": {
          width: "100%",
          border: "0px solid red",
          ml: "auto",
          mr: "auto",
        },
        "@media screen and (max-width: 550px)": {
          width: "250px",
          ml: "60px",
        },
        position: "relative",
      }}
    >
      <Box sx={{}}>
        <Title text="Welcome Back" />
      </Box>
      <Flex
        sx={{
          minHeight: "250px",
          width: "100%",
          borderBottom: "1px lightgrey dashed",
          mt: "40px",
          mb: "40px",
        }}
      >
        <GetStarted state={state} updateState={updateState} router={router} />
      </Flex>
      <Flex
        sx={{
          minHeight: "390px",
          width: "100%",
          borderBottom: "1px lightgrey dashed",
          mt: "20px",
          mb: "40px",
          flexDirection: "column",
        }}
      >
        <Title text="How To Generate A Report" />
        <Flex
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "30px",
          }}
        >
          <StepItem
            step="Step 1"
            title="Upload  Documents"
            icon="Documents"
            description="Support documents that contain all of the information to populate your report."
          />
          <ArrowFatRight size={30} color="#9999ff" weight="fill" />
          <StepItem
            step="Step 2"
            title="Upload A Base Template"
            icon="Templates"
            description="A Template must contain all of the reference {tags} that you want to replace."
          />
          <ArrowFatRight size={30} color="#9999ff" weight="fill" />{" "}
          <StepItem
            step="Step 3"
            title="Create Tags & Prompts"
            icon="Tags"
            description="Tags & Prompts retrieve the information for your report from your documents."
          />
          <ArrowFatRight size={30} color="#9999ff" weight="fill" />{" "}
          <StepItem
            step="Step 4"
            title="Create A Report"
            icon="Reports"
            description="Once the first 3 steps are complete you are ready to generate your report."
          />
        </Flex>
      </Flex>

      <Title text="Quick Links" />
      <Flex
        sx={{
          width: "900px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: "30px",
        }}
      >
        <Item
          icon="Reports"
          title="Reports"
          type="reports"
          urls={["/reports", "/reports?mode=create"]}
          router={router}
        />
        <Item
          icon="Documents"
          title="Documents"
          type="documents"
          urls={["/documents", "/documents?mode=add"]}
          router={router}
        />
        <Item
          icon="Templates"
          title="Templates"
          type="templates"
          urls={["/templates", "/templates?mode=add"]}
          router={router}
        />
        <Item
          icon="Tags"
          title="Tags"
          type="tags"
          urls={["/tags"]}
          router={router}
          singleLink
        />
        <Item
          icon="Chat"
          title="Chat"
          type="chat"
          urls={["/chat"]}
          router={router}
          singleLink
        />
      </Flex>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLoading: (loading: boolean) => dispatch({ type: "SET_LOADING", loading }),
  hideNotification: () => dispatch({ type: "HIDE_NOTIFICATION" }),
  showNotification: (data: any) =>
    dispatch({ type: "SHOW_NOTIFICATION", data }),
});

const mapStateToProps = (state: { account: { loading: boolean } }) => {
  const { account } = state;
  return {
    loading: account.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
