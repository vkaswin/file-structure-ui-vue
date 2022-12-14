export type FolderState = {
  selectedId: string | null;
  renameId: string | null;
  addType: Icon;
  renameType: Icon;
  title: string;
  renameTitle: string;
  error: string | null;
  expandedFolderIds: string[];
  hover: boolean;
  drag: {
    source: DragSource;
    destination: DragDestination;
  };
  folders: Folder[];
};

export type DragSource = {
  folderId: string | null;
  fileId: string | null;
  type: "folder" | "file" | null;
};

export type DragDestination = {
  folderId: string | null;
};

export type Files = {
  id: string;
  title: string;
  path: string;
};

export type Folder = {
  id: string;
  title: string;
  path: string;
  files: Files[];
  subFolders?: Folder[];
};

export type AddSubFolder = (folder: Folder, rootFolder: Folder) => void;

export type GetRootFolder = (
  path: string,
  rootFolders: Folder[]
) => Folder | undefined;

export type GroupFoldersByPath = (folders: Folder[]) => Folder[];

export type SortFunction = <T extends { title: string }>(a: T, b: T) => number;

export type Icon = "file" | "folder" | null;

declare global {
  interface Crypto {
    randomUUID: () => string;
  }
}
