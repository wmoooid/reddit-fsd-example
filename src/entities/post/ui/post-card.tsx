import * as React from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';

export function PostCard() {
  return (
    <Card className="w-[60rem]">
      <CardHeader>
        <CardTitle>Post name</CardTitle>
        <CardDescription className="flex gap-4">
          <span className="text-primary">r/memes</span>
          <span>8 hours ago</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src="/assets/pikachu-mem-hd.jpg"
          alt="meme"
        />
      </CardContent>
      {/* <CardFooter className="flex justify-between"></CardFooter> */}
    </Card>
  );
}
