import {
  TimelineDescription,
  TimelineEntry,
  TimelineEntryHeader,
  TimelineRoot,
} from "./Timeline.styles";

export type TimelineItem = {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

type TimelineProps = {
  items: readonly TimelineItem[];
  activeItemId?: string | null;
};

export function Timeline({ items, activeItemId = items[0]?.id }: TimelineProps) {
  return (
    <TimelineRoot>
      {items.map((item) => {
        const active = item.id === activeItemId;

        return (
          <TimelineEntry key={item.id} $active={active}>
            <TimelineEntryHeader>{item.title}</TimelineEntryHeader>
            <TimelineDescription>
              {typeof item.description === "string" ? <p>{item.description}</p> : item.description}
            </TimelineDescription>
          </TimelineEntry>
        );
      })}
    </TimelineRoot>
  );
}
