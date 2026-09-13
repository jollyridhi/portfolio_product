import type { ProductFrameId } from "@/data/product-frames";
import { ProductFrame } from "@/components/ProductFrames";

export function ProductShot({
  id,
  alt,
  caption,
  compact,
  decorative,
  className = "",
}: {
  id: ProductFrameId;
  alt: string;
  caption?: string;
  compact?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  const stage = (
    <div
      className={`overflow-hidden ${
        compact ? "h-full w-full" : "aspect-[16/10] rounded-2xl border border-line shadow-shot"
      }`}
    >
      <div aria-hidden="true" className="h-full">
        <ProductFrame id={id} compact={compact} />
      </div>
    </div>
  );

  if (decorative) {
    return (
      <div className={`h-full ${className}`} aria-hidden="true">
        {stage}
      </div>
    );
  }

  return (
    <figure className={`m-0 ${compact ? "h-full" : ""} ${className}`}>
      <div role="img" aria-label={alt} className={compact ? "h-full" : undefined}>
        {stage}
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
