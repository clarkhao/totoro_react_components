import { TypingContext, useTyping } from "../group-text-animation/typingHook";
import { Typing } from "../../component/group-text-animation/typing";
import style from "./intro.module.css";
import { IconScatter } from "../group-animate/iconScatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faBriefcase,
  faBuildingColumns,
  faCakeCandles,
  faCode,
  faCoffee,
  faEarthAmericas,
  faEnvelope,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAws,
  faCss3Alt,
  faDiscord,
  faGithub,
  faGolang,
  faJs,
  faReact,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Progress } from "../progress/progress";
import { Slider } from "../slider/slider";
import { InputField } from "../next-input/inputField";
import { Button } from "../button/button";
import { HambergerDrop } from "./hambergerDrop";
import React from "react";
//hooks
import { ErrorContext } from "./contactHook";

type TContact = {
  name: string;
  email: string;
  content: string;
};

export function Intro() {
  const { typingStates, typingDispatch } = useTyping();
  const [data, setData] = React.useState<TContact>({
    name: "",
    email: "",
    content: "",
  });
  const [isBlur, setIsBlur] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);
  const [state, setState] = React.useState<
    "pending" | "success" | "fail" | undefined
  >(undefined);
  const controller = React.useRef<AbortController>(new AbortController());
  //context states
  const [errors, setErrors] = React.useState<
    Record<string, { isErr: boolean; errMsg: string | undefined }>
  >({});
  //
  React.useEffect(() => {
    const validateText = () => {
      if (data.content.trim().length < 5) {
        setErrors((prev) => {
          return {
            ...prev,
            content: {
              isErr: true,
              errMsg: "Please write at least 5 chars",
            },
          };
        });
      } else {
        setErrors((prev) => {
          return {
            ...prev,
            content: { isErr: false, errMsg: "" },
          };
        });
      }
    };
    if (data.content) {
      validateText();
    }
  }, [isBlur, data.content]);
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    switch (state) {
      case undefined:
        setIsFetching(true);
        controller.current = new AbortController();
        break;
      case "pending":
        controller.current.abort();
        break;
      default:
        setState(undefined);
    }
  };
  React.useEffect(() => {
    const postContact = () => {
      setState("pending");
      fetch(
        "https://jgaznan5mg.execute-api.us-east-1.amazonaws.com/prod/v0/portfolio/contact",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
          signal: controller.current.signal,
        },
      )
        .then(async (res) => {
          return await res.json();
        })
        .then(() => {
          setState("success");
        })
        .catch((err) => {
          if ((err as Error).name === "AbortError") {
            setState(undefined);
          } else {
            setState("fail");
          }
        })
        .finally(() => {
          setIsFetching(false);
        });
    };
    if (state === undefined && isFetching) {
      postContact();
    }
  }, [data, isFetching, state]);

  return (
    <div className={["w-full h-screen relative", style.scroll].join(" ")}>
      <HambergerDrop
        className="top-6 right-10 md:top-10 md:right-16 z-[99]"
        color={"#FF2773"}
      />
      <section
        className={[
          "w-full min-h-screen flex flex-col md:flex-row justify-between",
          style.scrollitem,
        ].join(" ")}
        id="home"
      >
        <article className="w-full md:w-1/2 lg:w-1/3 hidden md:flex md:h-screen justify-center items-center mx-auto md:ml-4 lg:ml-20 relative">
          <div
            className={[
              "bg-no-repeat bg-center w-[360px] h-[360px] lg:w-[400px] lg:h-[400px] ",
              style.image,
            ].join(" ")}
          ></div>
          <IconScatter
            from={{ x: 300, y: 300 }}
            childList={[
              <FontAwesomeIcon
                key={"icon-0"}
                icon={faCoffee}
                style={{
                  color: "red",
                  width: "30px",
                  height: "auto",
                }}
              />,
              <FontAwesomeIcon
                key={"icon-1"}
                icon={faCode}
                style={{
                  color: "red",
                  width: "30px",
                  height: "auto",
                }}
              />,
              <FontAwesomeIcon
                key={"icon-2"}
                icon={faCss3Alt}
                style={{
                  color: "red",
                  width: "30px",
                  height: "auto",
                }}
              />,
              <FontAwesomeIcon
                key={"icon-3"}
                icon={faReact}
                spin
                style={{
                  color: "#4026d9",
                  width: "30px",
                  height: "auto",
                }}
              />,
              <FontAwesomeIcon
                key={"icon-4"}
                icon={faJs}
                style={{
                  color: "#ea8a15",
                  width: "30px",
                  height: "auto",
                }}
              />,
              <FontAwesomeIcon
                key={"icon-4"}
                icon={faGolang}
                style={{
                  color: "red",
                  width: "30px",
                  height: "auto",
                }}
              />,
              <FontAwesomeIcon
                key={"icon-4"}
                icon={faAws}
                style={{
                  color: "red",
                  width: "30px",
                  height: "auto",
                }}
              />,
            ]}
          />
        </article>

        <article className="md:flex-1 h-screen relative overflow-hidden">
          <div className={style.blobone}></div>
          <div className={style.blobtwo}></div>
          <div className={style.blobthree}></div>
          <div className={style.overlay}></div>
          <TypingContext.Provider value={{ typingStates, typingDispatch }}>
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-black text-[1.6rem] sm:text-[2.5rem] md:text-[1.6rem] lg:text-[2.5rem] xl:text-[3.5rem] font-bold rounded-lg p-2">
              <Typing
                text={["Hello World", "I am Clark", "A Frontend Developer"]}
              />
            </div>
          </TypingContext.Provider>
        </article>
      </section>
      <section
        className={[
          "w-full min-h-screen relative bg-gray-700 pt-0 sm:pt-24",
          "flex flex-col justify-center items-center gap-10",
          style.scrollitem,
        ].join(" ")}
        id="about"
      >
        <section
          className={[
            "w-[100%] sm:w-[90%] md:w-[75%] h-screen sm:h-[560px] lg:h-[500px]",
            style.about,
          ].join(" ")}
        >
          <article></article>
          <article></article>
          <div
            className={[
              "h-full flex flex-col justify-around items-center p-4 gap-6",
              style.content,
            ].join(" ")}
          >
            <h1>About Me</h1>
            <p className="text-sm text-justify">
              A self-taught developer with full-stack/React frontendbackground,
              specializing in React technology, familiar with AWS Serverless
              architecture and capable of full-stack development. Within 2 years
              experiences of web app devs, one aspect I particularly enjoy is
              building frontend applications using a component-based approach. I
              relish the process of creating reusable components, akin to
              assembling LEGO bricks, which enables me to efficiently construct
              complex and feature-rich web apps. Currenly working on one
              self-project with aws cdk deployed,golang serverless backend and
              Next.js as frontend.
              <br />I am seeking a position as a Frontend Developer. I am
              excited about the opportunity to collaborate with a team and
              contribute to meaningful projects that push the boundaries of
              modern web development.
            </p>
            <div className="w-full h-[30%] grid grid-cols-1 sm:grid-cols-2">
              <div className="p-2 text-[12px] flex justify-start items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{
                    color: "whitesmoke",
                    width: "12px",
                    height: "auto",
                  }}
                />
                Location: TianJin, China
              </div>
              <div className="p-2 text-[12px] flex justify-start items-center gap-2">
                <FontAwesomeIcon
                  icon={faCakeCandles}
                  style={{
                    color: "whitesmoke",
                    width: "12px",
                    height: "auto",
                  }}
                />
                Age: 41
              </div>
              <div className="p-2 text-[12px] flex justify-start items-center gap-2">
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  style={{
                    color: "whitesmoke",
                    width: "14px",
                    height: "auto",
                  }}
                />
                Nationality: China
              </div>
              <div className="p-2 text-[12px] flex justify-start items-center gap-2">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{
                    color: "whitesmoke",
                    width: "14px",
                    height: "auto",
                  }}
                />
                Interests: Animation Make, Games, Bodyweight Exercises
              </div>
              <div className="p-2 text-[12px] flex justify-start items-center gap-2">
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  style={{
                    color: "whitesmoke",
                    width: "14px",
                    height: "auto",
                  }}
                />
                University: Shandong University of Science and Technology
              </div>
              <div className="p-2 text-[12px] flex justify-start items-center gap-2">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{
                    color: "whitesmoke",
                    width: "14px",
                    height: "auto",
                  }}
                />
                Job: Freelancer
              </div>
            </div>
            <div className="w-full flex justify-end">
              <a
                href="https://doggycatty.s3.amazonaws.com/app/resume_2023.pdf"
                target="_blank"
              >
                <button className="bg-slate-600 px-4 py-2 text-base hover:bg-slate-400 mr-10">
                  RESUME
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="text-[whitesmoke] p-2 w-full lg:w-3/4 flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl">Core Tech Stack</h1>
          <article className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-base text-gray-300">-- Frontend --</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mx-2">
                <Progress header="HTML" count={8} />
                <Progress header="CSS" count={8} />
                <Progress header="Javascript" count={8} />
                <Progress header="TypeScript" count={7} />
                <Progress header="React" count={8} />
                <Progress header="Nextjs" count={7} />
                <Progress header="TailwindCSS" count={7} />
                <Progress header="Zustand" count={6} />
                <Progress header="Storybook" count={7} />
                <Progress header="Jest" count={4} />
                <Progress header="GraphQL" count={5} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-base text-gray-300">-- Backend --</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mx-2">
                <Progress header="Nodejs" count={7} />
                <Progress header="Golang" count={6} />
                <Progress header="RestAPI" count={8} />
                <Progress header="SQL" count={6} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-base text-gray-300">-- Spoken Language --</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mx-2">
                <Progress header="Chinese" count={10} />
                <Progress header="English" count={7} />
                <Progress header="Japanese" count={3} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-base text-gray-300">-- Others --</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mx-2">
                <Progress header="Github" count={7} />
                <Progress header="AWS CDK" count={5} />
                <Progress header="ReactNative" count={3} />
              </div>
            </div>
          </article>
        </section>
        <section className="text-[whitesmoke]  p-10 flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl">My Works</h1>
          <Slider
            imageList={[
              {
                from: "https://doggycatty.s3.amazonaws.com/app/works/storybook.webp",
                to: "https://clarkhao.github.io/?path=/docs/stories-intro--docs",
              },
              {
                from: "https://doggycatty.s3.amazonaws.com/app/works/codepen.png",
                to: "https://codepen.io/clark-hao",
              },
            ]}
          />
        </section>
      </section>
      <ErrorContext.Provider value={{ errors, setErrors }}>
        <section
          className={[
            "min-h-screen w-full bg-white flex flex-col justify-between",
            style.scrollitem,
          ].join(" ")}
          id="contact"
        >
          <form className="w-1/2 min-w-[400px] flex flex-col justify-center items-start gap-2 p-10 pt-20">
            <div className="flex flex-row justify-start items-center gap-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: "40px", height: "auto" }}
              />
              <h1>Get in touch</h1>
            </div>
            <InputField
              variant="filled"
              type="text"
              name="name"
              labelText="Name"
              value={data.name}
              handleInput={(value: string) => setData({ ...data, name: value })}
              needVerified
              requestErr={errors["name"]?.errMsg}
              handleFocus={() =>
                setErrors((prev) => {
                  return {
                    ...prev,
                    name: { isErr: false, errMsg: "" },
                  };
                })
              }
            />
            <InputField
              variant="filled"
              type="email"
              name="email"
              labelText="Email"
              value={data.email}
              handleInput={(value: string) =>
                setData({ ...data, email: value })
              }
              needVerified
              requestErr={errors["email"]?.errMsg}
              handleFocus={() =>
                setErrors((prev) => {
                  return {
                    ...prev,
                    email: { isErr: false, errMsg: "" },
                  };
                })
              }
            />
            <div className="w-full flex flex-col justify-start items-start gap-0">
              <div className="relative w-full">
                <textarea
                  id="textarea"
                  name="message"
                  placeholder="Message"
                  value={data.content}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setData({ ...data, content: e.target.value });
                  }}
                  onBlur={() => setIsBlur(true)}
                  onFocus={() => setIsBlur(false)}
                  className={[
                    "w-full border-none bg-gray-50 min-h-[110px] rounded-tl-lg rounded-tr-lg",
                    "outline-0 focus:ring-0 placeholder:text-sm",
                    style.textarea,
                    errors["content"]?.isErr ? "text-ele-error" : "",
                  ].join(" ")}
                />
                <label
                  htmlFor="textarea"
                  className={[
                    style.label,
                    errors["content"]?.isErr
                      ? "after:border-t-ele-error after:border-t-[3px]"
                      : "after:border-t-[#45f3ff] after:border-t-[3px]",
                  ].join(" ")}
                ></label>
              </div>
              <p className="text-ele-error text-xs italic -mt-[6px]">
                {errors["content"]?.errMsg}
              </p>
            </div>
            {Object.entries(errors)
              .map(([_, value]) => {
                console.log(_);
                return value.isErr;
              })
              .every((bool) => {
                return bool === false;
              }) &&
            Object.entries(data)
              .map(([_, value]) => {
                console.log(_);
                return value as string;
              })
              .every((value) => value && value.length > 0) ? (
              <Button
                isPrimary
                size="base"
                width="w-36"
                isOutlined
                onClick={handleSubmit}
                moreAnimated
                callbackState={state}
              >
                Submit
              </Button>
            ) : (
              <button
                className="w-36 text-rose-200 border-2 border-rose-400 h-10 text-sm font-medium relative block focus:ring-4 focus:outline-none rounded-[20px] transition-all duration-300 ease-in-out"
                disabled
              >
                Submit
              </button>
            )}
          </form>
          <div
            className={[
              "w-full h-40 bg-gray-700 relative text-[whitesmoke]",
              "flex flex-col justify-end items-center gap-4 pb-4",
            ].join(" ")}
          >
            <div
              className={[
                "w-10 h-10 rounded-full bg-gray-500 left-1/2 -translate-x-1/2 absolute -top-[20px]",
              ].join(" ")}
            >
              <a href="#home">
                <FontAwesomeIcon
                  icon={faAngleUp}
                  style={{ width: "24px", height: "auto" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
              </a>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <a href="https://github.com/clarkhao" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="cursor-pointer" />
              </a>
              <a href="https://twitter.com/clarktotoro" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} className="cursor-pointer" />
              </a>
              <a href="https://discord.gg/HreQbEZK" target="_blank">
                <FontAwesomeIcon icon={faDiscord} className="cursor-pointer" />
              </a>
            </div>
            <span className="text-xs">© Copyright 2023 Clark Hao</span>
          </div>
        </section>
      </ErrorContext.Provider>
    </div>
  );
}
