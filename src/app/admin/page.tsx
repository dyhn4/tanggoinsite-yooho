"use client";

import { useState, useCallback } from "react";
import { Mail, Building2, Phone, Calendar, Tag, Eye, EyeOff } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Contact | null>(null);

  const fetchContacts = useCallback(async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        headers: { "x-admin-password": pw },
      });
      if (res.status === 401) {
        setError("비밀번호가 올바르지 않습니다.");
        return;
      }
      const data = await res.json();
      setContacts(data);
      setAuthed(true);
    } catch {
      setError("데이터를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 w-full max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-slate-900">관리자 페이지</span>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                관리자 비밀번호
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchContacts(password)}
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={() => fetchContacts(password)}
              disabled={loading || !password}
              className="w-full py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium transition-colors disabled:opacity-60"
            >
              {loading ? "로그인 중..." : "로그인"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-100 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-bold text-slate-900 text-sm">
              탱고인사이트 — 문의 관리
            </span>
          </div>
          <span className="text-slate-500 text-sm">
            총 {contacts.length}건
          </span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 목록 */}
          <div className="lg:col-span-1 space-y-3">
            {contacts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-8 text-center text-slate-500 text-sm">
                접수된 문의가 없습니다.
              </div>
            ) : (
              contacts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selected?.id === c.id
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-medium text-slate-900 text-sm">{c.name}</span>
                    {!c.isRead && (
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-1.5" />
                    )}
                  </div>
                  <div className="text-slate-500 text-xs mb-1">{c.email}</div>
                  {c.company && (
                    <div className="text-slate-400 text-xs">{c.company}</div>
                  )}
                  <div className="text-slate-400 text-xs mt-2">
                    {new Date(c.createdAt).toLocaleDateString("ko-KR")}
                  </div>
                </button>
              ))
            )}
          </div>

          {/* 상세 */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-slate-900 text-lg">{selected.name}</h2>
                  <span className="text-slate-400 text-xs">
                    {new Date(selected.createdAt).toLocaleString("ko-KR")}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Mail, label: "이메일", value: selected.email },
                    { icon: Phone, label: "연락처", value: selected.phone || "—" },
                    { icon: Building2, label: "회사명", value: selected.company || "—" },
                    { icon: Tag, label: "관심 서비스", value: selected.service || "—" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-400 mb-0.5">{item.label}</div>
                        <div className="text-sm text-slate-900">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-2">문의 내용</div>
                  <p className="text-slate-900 text-sm leading-relaxed whitespace-pre-wrap">
                    {selected.message}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 p-8 text-center text-slate-500 text-sm flex flex-col items-center justify-center h-64">
                <Mail size={32} className="text-slate-300 mb-3" />
                왼쪽에서 문의를 선택하면 상세 내용을 확인할 수 있습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
