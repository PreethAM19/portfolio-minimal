import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.1), transparent 32%), linear-gradient(180deg, #050608 0%, #090d14 56%, #050608 100%)",
          color: "#f4f7fb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
            maskImage:
              "radial-gradient(circle at center, black 22%, transparent 78%)",
            opacity: 0.12,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 82,
            top: 82,
            height: 420,
            width: 420,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(141,167,200,0.2), rgba(141,167,200,0.02) 68%, transparent 76%)",
            filter: "blur(8px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 96,
            bottom: 74,
            height: 240,
            width: 240,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "radial-gradient(circle, rgba(207,180,134,0.14), transparent 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "74px 76px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              padding: "12px 22px",
              fontSize: 24,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Portfolio
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 860,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 88,
                lineHeight: 0.92,
                letterSpacing: "-0.06em",
                fontWeight: 700,
              }}
            >
              Preetham Raj
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 88,
                lineHeight: 0.92,
                letterSpacing: "-0.06em",
                fontWeight: 700,
              }}
            >
              Ramraj
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 28,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.58)",
              }}
            >
              Full-Stack Engineer
            </div>
            <div
              style={{
                marginTop: 28,
                maxWidth: 920,
                fontSize: 30,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Production web platforms, cloud-native systems, LLM integrations,
              and agentic AI workflows.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              color: "rgba(255,255,255,0.64)",
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <div>Next.js</div>
            <div>TypeScript</div>
            <div>AWS</div>
            <div>LangGraph</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
