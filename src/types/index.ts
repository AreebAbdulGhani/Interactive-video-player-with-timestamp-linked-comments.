export interface Comment {
  id: string;
  username: string;
  avatar: string;
  timestamp: number; // in seconds
  text: string;
  createdAt: Date;
}

export interface VideoPlayerProps {
  videoUrl: string;
  comments: Comment[];
  onAddComment: (comment: Omit<Comment, 'id' | 'createdAt'>) => void;
}

export interface VideoControlsProps {
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  volume: number;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  comments: Comment[];
}

export interface CommentSidebarProps {
  comments: Comment[];
  currentTime: number;
  onCommentClick: (timestamp: number) => void;
  onAddComment: (text: string, timestamp: number) => void;
}

export interface FloatingCommentProps {
  comment: Comment;
  isVisible: boolean;
} 