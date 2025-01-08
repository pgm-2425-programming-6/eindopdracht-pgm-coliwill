export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          name?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      achievements_user: {
        Row: {
          achievement_id: number
          id: number
          unlocked_at: string
          user_id: string
        }
        Insert: {
          achievement_id: number
          id?: number
          unlocked_at: string
          user_id?: string
        }
        Update: {
          achievement_id?: number
          id?: number
          unlocked_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "achievements_user_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      choices: {
        Row: {
          choice_text: string
          created_at: string
          id: number
          is_correct: boolean
          multiple_choice_id: number
        }
        Insert: {
          choice_text?: string
          created_at?: string
          id?: number
          is_correct?: boolean
          multiple_choice_id: number
        }
        Update: {
          choice_text?: string
          created_at?: string
          id?: number
          is_correct?: boolean
          multiple_choice_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "choices_multiple_choice_id_fkey"
            columns: ["multiple_choice_id"]
            isOneToOne: false
            referencedRelation: "multiple_choice_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      friends: {
        Row: {
          created_at: string | null
          friend_id: string
          id: number
          status: Database["public"]["Enums"]["status"] | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          friend_id: string
          id: number
          status?: Database["public"]["Enums"]["status"] | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          friend_id?: string
          id?: number
          status?: Database["public"]["Enums"]["status"] | null
          user_id?: string
        }
        Relationships: []
      }
      input_questions: {
        Row: {
          created_at: string
          id: number
          image: string | null
          question_text: string
          quiz_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          question_text?: string
          quiz_id: number
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          question_text?: string
          quiz_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "input_questions_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      multiple_choice_questions: {
        Row: {
          created_at: string
          id: number
          image: string | null
          question_text: string
          quiz_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          question_text?: string
          quiz_id: number
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          question_text?: string
          quiz_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "multiple_choice_questions_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar: string | null
          created_at: string
          id: number
          user_id: string | null
          username: string
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
          username?: string
        }
        Update: {
          avatar?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
          username?: string
        }
        Relationships: []
      }
      quiz_attempt: {
        Row: {
          id: number
          quiz_id: number | null
          score: number | null
          user_id: string | null
        }
        Insert: {
          id?: number
          quiz_id?: number | null
          score?: number | null
          user_id?: string | null
        }
        Update: {
          id?: number
          quiz_id?: number | null
          score?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempt_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          category_id: number | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          category_id?: number | null
          created_at?: string
          id?: number
          name?: string
        }
        Update: {
          category_id?: number | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          created_at: string
          id: number
          sound: boolean
          user_id: string | null
          vibrations: boolean
        }
        Insert: {
          created_at?: string
          id?: number
          sound?: boolean
          user_id?: string | null
          vibrations?: boolean
        }
        Update: {
          created_at?: string
          id?: number
          sound?: boolean
          user_id?: string | null
          vibrations?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      status: "pending" | "declined" | "accepted"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
