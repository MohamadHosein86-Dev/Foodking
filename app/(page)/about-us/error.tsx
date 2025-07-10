"use client";
export default function Error({ error }: { error: { message: string } }) {
  const { message } = error;
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
