import { useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("not supported");
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("copy failed");
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
};

export default useCopyToClipboard;
