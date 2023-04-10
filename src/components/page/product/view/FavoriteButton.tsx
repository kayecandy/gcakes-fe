import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { useSession } from "@/components/common/hooks/useSession";
import { TOGGLE_FAVORITE_URL } from "@/components/common/util/urls";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";

export type FavoriteButtonProps = {
  productId: string;
  defaultIsFavorite?: boolean;
};

export const FavoriteButton: FC<FavoriteButtonProps> = ({ productId, defaultIsFavorite = false }) => {
  const session = useSession();
  const [isFavorite, setIsFavorite] = useState(defaultIsFavorite);

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (session) {
      setLoading(true);
      fetch(TOGGLE_FAVORITE_URL(productId), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
        .then(() => {
          setIsFavorite((_isFavorite) => !_isFavorite);
        })
        .finally(() => {
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    setIsFavorite(defaultIsFavorite)  
  }, [defaultIsFavorite])

  console.log("default", defaultIsFavorite, isFavorite)

  return (
    <Button
      sx={{
        mt: 4,
        mb: 5,
        color: COLOR_PALLETE[2],
      }}
      variant="text"
      startIcon={isFavorite ? <Favorite></Favorite> : <FavoriteBorder></FavoriteBorder>}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <Skeleton width="13rem"></Skeleton> : 
      
        session ? <>Add to favorites</> : <>Login to add to favorites</>
      }
    </Button>
  );
};
