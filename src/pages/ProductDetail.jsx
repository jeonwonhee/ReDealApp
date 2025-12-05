// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  DetailWrapper,
  DetailInner,
  ImageArea,
  MainImage,
  NoImage,
  InfoArea,
  Title,
  Price,
  Meta,
  TagRow,
  Tag,      // ✅ 작은 카드
  Divider,
  BackButton,
} from "./ProductDetail.styled";

const ProductDetail = ({ currentUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // 수정 모드
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const found = products.find((p) => String(p.id) === String(id));

    if (found) {
      setProduct(found);
      setEditTitle(found.title || "");
      setEditPrice(
        found.price != null && !Number.isNaN(found.price)
          ? String(found.price)
          : ""
      );
      setEditDescription(found.description || "");
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return (
      <DetailWrapper>
        <p>페이지를 찾을 수 없습니다.</p>
        <BackButton type="button" onClick={() => navigate("/")}>
          홈으로 가기
        </BackButton>
      </DetailWrapper>
    );
  }

  const formattedPrice =
    product.price != null ? `${product.price.toLocaleString()}원` : "가격 미정";
  const date = product.createdAt ? new Date(product.createdAt) : null;

  // 로그인 유저
  let user = currentUser;
  if (!user) {
    user = JSON.parse(localStorage.getItem("currentUser") || "null");
  }
  const isOwner = user && product.sellerId && product.sellerId === user.id;

  // ✅ 작은 카드(뱃지에 들어갈 텍스트들)
  const tags = [];
  if (product.directDeal === "yes") {
    tags.push("직거래 가능");
  } else if (product.directDeal === "no") {
    tags.push("직거래 불가");
  }

  if (product.shippingType === "include") {
    tags.push("배송비 포함");
  } else if (product.shippingType === "exclude") {
    tags.push("배송비 별도");
  }

  if (product.allowOffer) {
    tags.push("가격제안 받기");
  } else {
    tags.push("가격제안 불가");
  }

  // 삭제
  const handleDelete = () => {
    if (!isOwner) {
      alert("본인이 작성한 글만 삭제할 수 있습니다.");
      return;
    }
    if (!window.confirm("정말 이 상품을 삭제하시겠습니까?")) return;

    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const updated = products.filter((p) => String(p.id) !== String(id));
    localStorage.setItem("products", JSON.stringify(updated));

    alert("삭제가 완료되었습니다.");
    navigate("/");
  };

  // 수정 완료
  const handleEditSave = (e) => {
    e.preventDefault();

    if (!isOwner) {
      alert("본인이 작성한 글만 수정할 수 있습니다.");
      return;
    }

    if (!editTitle.trim()) {
      alert("상품명을 입력해주세요.");
      return;
    }

    const products = JSON.parse(localStorage.getItem("products") || "[]");

    const updated = products.map((p) =>
      String(p.id) === String(id)
        ? {
            ...p,
            title: editTitle,
            price: editPrice ? Number(editPrice) : p.price,
            description: editDescription,
          }
        : p
    );

    localStorage.setItem("products", JSON.stringify(updated));

    const updatedProduct = updated.find((p) => String(p.id) === String(id));
    setProduct(updatedProduct);
    setIsEditing(false);
    alert("수정이 완료되었습니다.");
  };

  return (
    <DetailWrapper>
      <DetailInner>
        {/* 이미지 영역 */}
        <ImageArea>
          {product.image ? (
            <MainImage src={product.image} alt={product.title} />
          ) : (
            <NoImage>이미지 없음</NoImage>
          )}
        </ImageArea>

        {/* 정보 영역 */}
        <InfoArea>
          {/* 제목 / 가격 */}
          {isEditing ? (
            <>
              <input
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                type="number"
                style={{
                  width: "50%",
                  padding: "8px 10px",
                  fontSize: "16px",
                  marginBottom: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                placeholder="가격"
              />
            </>
          ) : (
            <>
              <Title>{product.title}</Title>
              <Price>{formattedPrice}</Price>
            </>
          )}

          {/* 메타 정보 */}
          <Meta>카테고리: {product.category || "기타"}</Meta>
          {product.sellerName && <Meta>판매자: {product.sellerName}</Meta>}
          {date && (
            <Meta>
              등록일:{" "}
              {`${date.getFullYear()}-${String(
                date.getMonth() + 1
              ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`}
            </Meta>
          )}

          {/* ✅ 작은 카드 영역 */}
          {tags.length > 0 && (
            <TagRow>
              {tags.map((t, idx) => (
                <Tag key={idx}>{t}</Tag>
              ))}
            </TagRow>
          )}

          <Divider />

          {/* 상품 설명 */}
          {isEditing ? (
            <div style={{ marginTop: "12px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  fontWeight: 600,
                  color: "#333",
                }}
              >
                상품 설명
              </h3>
              <textarea
                style={{
                  width: "100%",
                  minHeight: "120px",
                  padding: "10px 12px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  resize: "vertical",
                }}
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>
          ) : (
            product.description && (
              <div style={{ marginTop: "12px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    marginBottom: "8px",
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  상품 설명
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#444",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {product.description}
                </p>
              </div>
            )
          )}

          {/* 작성자일 때만 보이는 버튼들 */}
          {isOwner && (
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "8px",
              }}
            >
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={handleEditSave}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#00c471",
                      color: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    수정 완료
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      backgroundColor: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    취소
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#00c471",
                      color: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    수정하기
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#ff4d4f",
                      color: "#fff",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    삭제하기
                  </button>
                </>
              )}
            </div>
          )}
        </InfoArea>
      </DetailInner>

      <BackButton type="button" onClick={() => navigate(-1)}>
        ← 뒤로가기
      </BackButton>
    </DetailWrapper>
  );
};

export default ProductDetail;
