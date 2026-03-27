import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          background:
            "radial-gradient(circle at top, rgba(207,180,134,0.24), rgba(255,255,255,0.04) 62%), linear-gradient(180deg, #050608 0%, #090d14 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#f4f7fb",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        P.
      </div>
    ),
    size,
  );
}
